package com.example.demo.config;

import jakarta.persistence.EntityManagerFactory;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
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
        basePackages = "com.example.demo.vehicleOwner.repo", // specify the correct repo package
        entityManagerFactoryRef = "vehicleOwnerEntityManagerFactory", // Use for vehicleOwner DB
        transactionManagerRef = "vehicleOwnerTransactionManager"      // For vehicleOwner DB transactions
)
public class OwnerDataSourceConfig {
    @Primary
    @Bean(name = "vehicleOwnerDataSource")
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }

    @Primary
    @Bean(name = "vehicleOwnerEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean vehicleOwnerEntityManagerFactory(
            EntityManagerFactoryBuilder builder, @Qualifier("vehicleOwnerDataSource") DataSource dataSource) {
        return builder
                .dataSource(dataSource)
                .packages("com.example.demo.vehicleOwner.model")  // Ensure VehicleValidation resides in this package
                .persistenceUnit("vehicleOwner")  // Identifier for persistence context
                .build();
    }

    @Primary
    @Bean(name = "vehicleOwnerTransactionManager")
    public PlatformTransactionManager vehicleOwnerTransactionManager(
            @Qualifier("vehicleOwnerEntityManagerFactory") EntityManagerFactory vehicleOwnerEntityManagerFactory) {
        return new JpaTransactionManager(vehicleOwnerEntityManagerFactory);
    }
}
