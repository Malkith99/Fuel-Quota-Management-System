package com.admin.admin.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import jakarta.persistence.EntityManagerFactory;
import javax.sql.DataSource;
import org.springframework.boot.jdbc.DataSourceBuilder;


@Configuration
@EnableJpaRepositories(
    basePackages = "com.admin.admin.owner.repo",
    entityManagerFactoryRef = "ownerEntityManager",
    transactionManagerRef = "ownerTransactionManager"
)
public class OwnerDataSourceConfig {

    @Bean(name = "ownerDataSource")
    public DataSource ownerDataSource() {
        return DataSourceBuilder.create()
                .url("jdbc:mysql://localhost:3306/OwnerDb")
                .username("root")
                .password("m123")
                .driverClassName("com.mysql.cj.jdbc.Driver")
                .build();
    }

    @Bean(name = "ownerEntityManager")
    public LocalContainerEntityManagerFactoryBean ownerEntityManager(EntityManagerFactoryBuilder builder) {
        return builder
                .dataSource(ownerDataSource())
                .packages("com.admin.admin.owner.model")
                .persistenceUnit("owner")
                .build();
    }

    @Bean(name = "ownerTransactionManager")
    public PlatformTransactionManager ownerTransactionManager(
            @Qualifier("ownerEntityManager") EntityManagerFactory ownerEntityManagerFactory) {
        return new JpaTransactionManager(ownerEntityManagerFactory);
    }
}

