output "lambda_function_url" {
  description = "URL of the Lambda function (direct)"
  value       = aws_lambda_function_url.api_url.function_url
}

output "lambda_function_name" {
  description = "Name of the Lambda function"
  value       = aws_lambda_function.api.function_name
}

output "api_gateway_url" {
  description = "URL of the API Gateway"
  value       = aws_apigatewayv2_stage.default.invoke_url
}
