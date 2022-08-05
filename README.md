# A Corporate site sample of Amplify UI Library with Gatsby

Learn more : https://qiita.com/goosys/items/24171d97b0cee7af07c4

# Usage

## Prepare

- Duplicate a figma file from here. 
  - https://www.figma.com/community/file/1047600760128127424
- Create a Amplify app on AWS Console.

## Install

- `amplify pull --appId YOUR_APP_ID --envName ENV`
- Answer some questions so that the output looks like this.
  - ```json
    {
      "providers": [
        "awscloudformation"
      ],
      "projectName": "YOUR_APP_NAME",
      "version": "3.1",
      "frontend": "javascript",
      "javascript": {
        "framework": "react",
        "config": {
          "SourceDir": "src",
          "DistributionDir": "public",
          "BuildCommand": "yarn build",
          "StartCommand": "yarn serve"
        }
      }
    }
    ```

## Development

- `amplify start`

## Serving

- `yarn build`
- `yarn serve`

## Hosting

- `amplify publish`
