# amazon_review_full_csv

To install dependencies:

```bash
bun install
```

Got the data from [this data set on kaggle](https://www.kaggle.com/datasets/kritanjalijain/amazon-reviews).
To run it extract both files and add them to the folder `/data/`

## Scripts

Generate basic relations:

```bash
bun run index.ts
```

this is going to generate a file with the number of times a word proceeds another in `/results/basic.json`

As it is going to generate a very big file, it's more useful to filter the most common word result:

```bash
bun run filterMostCommon.ts
```

generating `/results/nextMostCommon.json`

If you want to query the most common next word use:

```bash
bun run query.ts ${queryTerm}
```
