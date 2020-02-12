const dev = {
  STRIPE_KEY: "pk_test_Dye0dODZpDMWopWJHWNDA4Sc00EI0f85OV",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-api-dev-attachmentsbucket-1jw4js9hnvu0p"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "notesd.taqtica.co"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_5O5X94Ew6",
    APP_CLIENT_ID: "k18foi6pfj8147shjm8hokame",
    IDENTITY_POOL_ID: "us-east-2:4e63b6be-efcc-4781-9f6d-e34e76c3fb66"
  }
};

const prod = {
  STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY",
  s3: {
    REGION: "us-east-2",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "notes.taqtica.co"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_oy8E9IAv1",
    APP_CLIENT_ID: "4hhhgqjapisgi9d5g8oq9cmvkl",
    IDENTITY_POOL_ID: "us-east-2:8b8e34e9-6b33-4b0d-bbd7-754c64e00b81"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
