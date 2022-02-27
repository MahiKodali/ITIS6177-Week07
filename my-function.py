def lambda_handler(event, context):
    # TODO implement
    message = event["keyword"]
    output = 'Mahathi Kodali says' + message
    return {
        'statusCode': 200,
        'body': json.dumps(output)
    }
