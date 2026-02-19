output "lambda_function_url" {
  description = "URL of the Lambda function"
  value       = aws_lambda_function_url.api_url.function_url
}

output "lambda_function_name" {
  description = "Name of the Lambda function"
  value       = aws_lambda_function.api.function_name
}
