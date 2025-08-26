<br/>

# example-test-pack

<br/>

---

## Local Setup:

#### Pre-requisites:

1. You have a local copy of the example-test-framework project (ETF).
2. You have run `pnpm install` on the ETF project.
3. You have run `pnpm build` on the ETF project.
4. You have run `pnpm exec` in your test pack to install the browser drivers.
5. To develop against the framework, update the `example-tests-framework` in the `package.json` to point to
   your local repository using the `file:` protocol.
   _* See below for further info._

### Example of how this should look:

Before:

```json
{
  "dependencies": {
    "example-tests-framework": "^1.0.0"
  }
}
```

After:

```json
{
  "dependencies": {
    "example-tests-framework": "file: ${PATH-TO-FRAMEWORK-DIRECTORY}/example-tests-framework"
  }
}
```

## Running the project locally:

Following the successful completion of the pre-requisites, you will need to `pnpm install` the project after making any
changes in the framework.

With this completed, you should now be able to run your tests (AWS access assumed) using `pnpm test` this command runs
`pnpm bddgen && pnpm playwright test`. _* You may also want to add the `--ui` flag if you would like to see the tests
running and use the Playwright GUI._

The `pnpm test:local` convenience command will complete all steps mentioned above (install, BDD codegen, test).
