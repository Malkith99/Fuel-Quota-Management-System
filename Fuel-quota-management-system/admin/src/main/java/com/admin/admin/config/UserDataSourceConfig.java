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
import org.springframework.context.annotation.Primary;

@Configuration
@EnableJpaRepositories(
    basePackages = "com.admin.admin.user.repo",
    entityManagerFactoryRef = "userEntityManager",
    transactionManagerRef = "userTransactionManager"
)
public class UserDataSourceConfig {

    @Bean(name = "userDataSource")
    @Primary
    public DataSource userDataSource() {
        return DataSourceBuilder.create()
                .url("jdbc:mysql://localhost:3306/UserDb")
                .username("root")
                .password("m123")
                .driverClassName("com.mysql.cj.jdbc.Driver")
                .build();
    }

    @Bean(name = "userEntityManager")
    @Primary
    public LocalContainerEntityManagerFactoryBean userEntityManager(EntityManagerFactoryBuilder builder) {
        return builder
                .dataSource(userDataSource())
                .packages("com.admin.admin.user.model")
                .persistenceUnit("user")
                .build();
    }

    @Bean(name = "userTransactionManager")
    @Primary
    public PlatformTransactionManager userTransactionManager(
            @Qualifier("userEntityManager") EntityManagerFactory userEntityManagerFactory) {
        return new JpaTransactionManager(userEntityManagerFactory);
    }
}

