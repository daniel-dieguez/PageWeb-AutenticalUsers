# User Authentication System

## Description

This project is an authentication system built with Java Spring Boot and MySQL. It allows users to log in to view data securely. New users can also be created to gain access to view and manage the data.

## Features

- **User Authentication**: Secure login and logout functionality.
- **Data Access**: Authenticated users can view all data in the system.
- **User Creation**: Allows creating new user accounts with access permissions.
- **Data Management**: Users with access can view and interact with the available data.

## Requirements

- **Java**: JDK 11 or higher
- **Spring Boot**: Version 2.5 or higher
- **MySQL**: Version 5.7 or higher

## Installation

1. **Clone this repository** to your local machine:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd your-repo-name
    ```

3. **Configure the database**:
    - Create a MySQL database .
    - Update the database configuration in `src/main/resources/application.properties`:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/auth_system_db
    spring.datasource.username=your_mysql_username
    spring.datasource.password=your_mysql_password
    spring.jpa.hibernate.ddl-auto=update
    ```

4. **Build the project**:

    ```bash
    ./mvnw clean install
    ```

## Usage

1. **Run the Spring Boot Application**:

    ```bash
    ./mvnw spring-boot:run
    ```

2. **Access the application**:
    - The API will be available at `http://localhost:`.

3. **Endpoints**:
    - `POST /auth/register`: Register a new user.
    - `POST /auth/login`: Log in with existing user credentials.
    - `GET /data`: Access the main data (authenticated users only).

## Technologies Used

- **Java Spring Boot**: Backend framework for building the authentication system.
- **MySQL**: Database to store user credentials and data securely.
- **Maven**: Dependency management and build tool.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
