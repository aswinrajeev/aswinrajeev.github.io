import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from "aws-cdk-lib/aws-apigateway";

import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);

    const lambdaFunction = new lambda.Function(this, 'GetBlogPosts', {
      functionName: 'GetBlogPosts',
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('../feed-extractor-lambda') // assuming your Lambda function code is in a 'lambda' directory
    });

    const api = new apigateway.RestApi(this, "blog-posts-api", {
      restApiName: "GetBlogPosts API",
      description: "API to fetch recent posts from aswinrajeev.medium.com"
    });

    const getWidgetsIntegration = new apigateway.LambdaIntegration(lambdaFunction, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    api.root.addMethod("GET", getWidgetsIntegration); // GET /

  }
}
