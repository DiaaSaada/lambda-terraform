# Lambda API Gateway

A simple REST API deployed to AWS Lambda with API Gateway, automated via Terraform and GitHub Actions.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /products | List all products |
| POST | /products | Create a product |
| GET | /products/{id} | Get product by ID |
| GET | /categories | List categories |

## Setup

### Prerequisites

- AWS Account
- GitHub repository
- Terraform installed locally (for first-time init)

### 1. Create IAM User for CI/CD

1. Go to **AWS Console** > **IAM** > **Users** > **Create user**
2. User name: `github-actions-deployer`
3. Do NOT enable console access
4. Click **Next**

### 2. Attach Required Policies

Select **Attach policies directly** and add these three policies:

| Policy | Purpose |
|--------|---------|
| `AWSLambda_FullAccess` | Create/update Lambda functions and URLs |
| `IAMFullAccess` | Create IAM roles for Lambda execution |
| `AmazonAPIGatewayAdministrator` | Create/update API Gateway resources |

Click **Next** > **Create user**

### 3. Generate Access Keys

1. Click on the created user
2. Go to **Security credentials** tab
3. Click **Create access key**
4. Select **Application running outside AWS**
5. Click **Create access key**
6. Copy both values:
   - Access Key ID
   - Secret Access Key (shown only once)

### 4. Add Secrets to GitHub

1. Go to your GitHub repo > **Settings** > **Secrets and variables** > **Actions**
2. Add these repository secrets:

| Secret Name | Value |
|-------------|-------|
| `AWS_ACCESS_KEY_ID` | Your access key ID |
| `AWS_SECRET_ACCESS_KEY` | Your secret access key |

### 5. Deploy

Push to `main` branch to trigger automatic deployment:

```bash
git add .
git commit -m "Deploy"
git push origin main
```

## Project Structure

```
lambda-apigateway/
├── index.js                    # Lambda handler
├── terraform/
│   ├── main.tf                 # Provider, IAM, Lambda
│   ├── api_gateway.tf          # API Gateway configuration
│   ├── variables.tf            # Input variables
│   └── outputs.tf              # Output values
└── .github/
    └── workflows/
        └── deploy.yml          # CI/CD pipeline
```

## Outputs

After deployment, GitHub Actions will output:

- **api_gateway_url** - API Gateway endpoint
- **lambda_function_url** - Direct Lambda URL

## Local Development

Test the Lambda locally or via the deployed URLs using the `test.http` file.
