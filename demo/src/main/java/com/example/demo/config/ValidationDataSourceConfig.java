package com.example.demo.config;

import jakarta.persistence.EntityManagerFactory;
import org.hibernate.jpa.boot.spi.EntityManagerFactoryBuilder;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(
        basePackages = "com.example.demo.repo", // specify the correct repo package
        entityManagerFactoryRef = "validationEntityManagerFactory", // Use for validation DB
        transactionManagerRef = "validationTransactionManager"      // For validation DB transactions
)
public class ValidationDataSourceConfig {
    @Primary
    @Bean(name = "validationDataSource")
    @ConfigurationProperties(prefix = "spring.datasource.validation")
    public DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }

    @Primary
    @Bean(name = "validationEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(
            EntityManagerFactoryBuilder builder, @Qualifier("validationDataSource") DataSource dataSource) {
        return builder
                .dataSource(dataSource)
                .packages("com.example.demo.model")  // Ensure VehicleValidation resides in this package
                .persistenceUnit("validation")  // Identifier for persistence context
                .build();
    }

    @Primary
    @Bean(name = "validationTransactionManager")
    public PlatformTransactionManager validationTransactionManager(
            @Qualifier("validationEntityManagerFactory") EntityManagerFactory validationEntityManagerFactory) {
        return new JpaTransactionManager(validationEntityManagerFactory);
    }
}
