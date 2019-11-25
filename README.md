# surge.sh teardown domain

This action teardowns your surge.sh domain.

## Inputs

### `template`

**Required** Domain template where `$BRANCH` will be replaced with the deleted branch name

### `login`

**Required** Your user login

### `token`

**Required** Token obtained with `surge token` command

## Example usage

```yaml
on: delete

jobs:
  teardown:
    runs-on: ubuntu-latest

    steps:
      - uses: nelonoel/surge-sh-teardown@v1
      - with:
        template: "$BRANCH-awesomesauce.surge.sh"
        login: ${{ secrets.SURGE_LOGIN }}
        token: ${{ secrets.SURGE_TOKEN }}
```
