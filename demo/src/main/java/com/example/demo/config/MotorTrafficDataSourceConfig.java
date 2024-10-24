package com.example.demo.config;

import jakarta.persistence.EntityManagerFactory;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import javax.sql.DataSource;

@Configuration
@EnableJpaRepositories(
        basePackages = "com.example.demo.motorTrafficDep.repo", // specify the correct repo package
        entityManagerFactoryRef = "motorTrafficEntityManagerFactory", // Use for vehicleOwner DB
        transactionManagerRef = "motorTrafficTransactionManager"      // For vehicleOwner DB transactions
)
public class MotorTrafficDataSourceConfig {

    @Bean(name = "motorTrafficDataSource")
    public DataSource motorTrafficDataSource() {

        return DataSourceBuilder.create()
                .url("jdbc:mysql://localhost:3306/motorTrafficDB?createDatabaseIfNotExist=true")
                .username("root")
                .password("99Mathematics")
                .driverClassName("com.mysql.cj.jdbc.Driver")
                .build();
    }

    @Bean(name = "motorTrafficEntityManagerFactory")
    public LocalContainerEntityManagerFactoryBean motorTrafficEntityManagerFactory(
            EntityManagerFactoryBuilder builder) {
        return builder
                .dataSource(motorTrafficDataSource())
                .packages("com.example.demo.motorTrafficDep.model")  // Ensure VehicleValidation resides in this package
                .persistenceUnit("motorTrafficRecord")  // Identifier for persistence context
                .build();
    }


    @Bean(name = "motorTrafficTransactionManager")
    public PlatformTransactionManager motorTrafficTransactionManager(
            @Qualifier("motorTrafficEntityManagerFactory") EntityManagerFactory motorTrafficEntityManagerFactory) {
        return new JpaTransactionManager(motorTrafficEntityManagerFactory);
    }
}
