how to run automation script?
Install node module
Install cypress
Git clone of this project
Go to the project directory
npx cypress run
For PK store:
npx cypress run --browser chrome --config baseUrl=http://staging.sanasafinaz.com/pk
For UK store:
npx cypress run --browser chrome --config baseUrl=http://staging.sanasafinaz.com/uk
For US store:
npx cypress run --browser chrome --config baseUrl=http://staging.sanasafinaz.com/us
For EU store:
npx cypress run --browser chrome --config baseUrl=http://staging.sanasafinaz.com/eu
For GCC store:
npx cypress run --browser chrome --config baseUrl=http://staging.sanasafinaz.com/gcc
