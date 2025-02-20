# Contacts App - Django Project Setup Guide

## Prerequisites

Ensure you have the following installed on your system:

- Python (>=3.12 recommended)
- pip (Python package manager)
- virtualenv (for creating a virtual environment)

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <repository_url>
cd <project_directory>
```

### 2. Create and Activate a Virtual Environment

#### Windows:

```sh
python -m venv venv
venv\Scripts\activate
```

#### macOS/Linux:

```sh
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

```sh
pip install -r requirements.txt
```

### 4. Apply Database Migrations

```sh
python manage.py migrate
```

### 5. Run the Development Server

```sh
python manage.py runserver
```

The project should now be running locally at:

```
http://127.0.0.1:8000/
```

### 6. Deactivating the Virtual Environment (Optional)

When you're done working on the project, deactivate the virtual environment by running:

```sh
deactivate
```

## Database Handling

This project uses **SQLite** by default. The database file (`db.sqlite3`) is included in `.gitignore`, so each user will generate their own database instance locally.

If you need to reset the database, delete `db.sqlite3` and re-run:

```sh
python manage.py migrate
```

## App Features

### View existing contacts in the database
![image](https://github.com/user-attachments/assets/40a80e46-6c07-4536-9f40-5832b076e12f)
*A stylish, modern UI is used.*


### Add a new contact to the database
![image](https://github.com/user-attachments/assets/3d15ee65-4026-4e4e-916f-cd5d24001ddd)
*Clicking the 'Add Contact' button generates a popup form with controls to add a new contact record.*


### Edit an existing contact in the database
![image](https://github.com/user-attachments/assets/ca936056-cad9-40cf-b250-e264528cef54)
*Clicking the 'Edit' button for a given row generates a popup form with controls to edit an existing contact record.*


### Delete an existing contact from the database
![image](https://github.com/user-attachments/assets/8357bf46-8f5b-42a8-8089-3f7fabd59953)
*Clicking the 'Delete' button for a given row generates a popup form with controls to delete an existing contact record.*



# Deploying App to Production

Below is a high-level overview of deploying a Django application such as this one to a cloud environment while ensuring security and scalability.

---

## 1. Prepare the Codebase

- Clean up the project by removing debug and test configurations.
- Update dependencies and create a `requirements.txt` file.
- Set up version control best practices, including `.gitignore`.

---

## 2. Configure Django for Production

- **Disable Debug Mode:** Set `DEBUG = False` in `settings.py`.
- **Define Allowed Hosts:** Specify valid domains in `ALLOWED_HOSTS`.
- **Manage Static Files:** Configure `STATIC_ROOT` for proper handling.
- **Secure the Secret Key:** Load from environment variables instead of hardcoding.

---

## 3. Securely Manage the Secret Key

- Use environment variables to store sensitive information.
- Leverage cloud-specific secret management tools (e.g., AWS Secrets Manager, Google Secret Manager, Heroku Config Vars).

---

## 4. Set Up a Production Database

- Choose a managed database service (e.g., AWS RDS, Google Cloud SQL, Heroku Postgres).
- Configure database settings in `settings.py` to use the production database:
  ```python
  DATABASES = {
      'default': {
          'ENGINE': 'django.db.backends.postgresql',
          'NAME': os.environ.get('DB_NAME'),
          'USER': os.environ.get('DB_USER'),
          'PASSWORD': os.environ.get('DB_PASSWORD'),
          'HOST': os.environ.get('DB_HOST'),
          'PORT': os.environ.get('DB_PORT'),
      }
  }
  ```
- Apply database migrations:
  ```bash
  python manage.py migrate
  ```
- Set up automated backups and monitoring for database reliability.

---

## 5. Choose a Cloud Hosting Solution

Popular cloud platforms include:
- **AWS (EC2, Elastic Beanstalk, Lambda)**
- **Google Cloud Platform (App Engine, Compute Engine)**
- **Heroku**
- **DigitalOcean**

### Deployment Steps

1. Provision a cloud server or platform service.
2. Set up SSH access and install necessary dependencies.
3. Configure environment variables for secrets and database credentials.
4. Run migrations and collect static files.
5. Start the application using Gunicorn or a managed application server.

---

## 6. Configure a Reverse Proxy

- Use **Nginx** or **Apache** to serve as a reverse proxy for Django.
- Set up proper request forwarding and static file handling.
- Enable HTTPS using **Let's Encrypt** or another SSL provider.

---

## 7. Implement Security Best Practices

- Use HTTPS for secure communication.
- Enforce secure cookies and CSRF protection.
- Regularly update dependencies and apply security patches.

---

## 8. Monitor and Maintain

- Set up logging and monitoring tools (e.g. Sentry).
- Automate database and media file backups.
- Implement CI/CD pipeline in github for streamlined deployments.

---
