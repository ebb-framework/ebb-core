![Project Logo](images/logo.png)

# ebb - Developers Guide

## Coding Notes

### Node Versions
The officially supported NodeJS versions are:

  - 4.x Latest
  - 5.x Latest
  - 6.x Latest

These versions are enforced by our build process. All changes need to be available
to all users.

### Babel
Code that deals with async behaviour for consistency should use Babel to transpile
the `async`/`await` type syntax. We also specifically use two other transforms
in the interest of performance:

  - [babel-transform-bluebird](https://www.npmjs.com/package/babel-plugin-transform-bluebird)
  - [fast-async](https://www.npmjs.com/package/fast-async)

The use of these as opposed to pure Node promises or async-to-generator was
made in the interests of raw performance. Code that is 'sometimes async' such
as potentially cached schema lookups benefits heavily from these changes.

__Note:__ The packaged content for NPM is the babel output, and all build process
intermediates/source files are excluded from the packaging.

### Unit Testing
Every line, branch and condition needs to be tested to be part of the core project.
Whilst we may flex this requirement in the future, the expectation is that 100% coverage
is a reasonable goal for a framework-type project.

### Performance Testing
Many sections of code such as serialization and deserialization, queue and dequeue
operations are subject to a performance test (see the `matrix-testing.spec.js` file),
where every combination of formatter and transport needs to support at least:

  - Send and recieve 1000 messages/second.
  - Blind send of at least 5000 messages/second.

## Working with Kafka
The Kafka transport needs an instance of Kafka in order to develop and test. The
following is used as a baseline configuration:

    docker run \
      -d \
      --name=kafka \
      --restart=always \
      -p 2181:2181 \
      -p 9092:9092 \
      --env _KAFKA_advertised_host_name=localhost \
      --env _KAFKA_advertised_port=9092 \
      --env _KAFKA_auto_create_topics_enable=true \
      flozano/kafka

This image is for a Kafka 0.9.x setup.