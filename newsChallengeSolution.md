# News Challenge Solution by Elle Ordoña

## User Stories

---

### Part 1

```md
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

User Story Breakdown:

- They want a page with the headline stories

Initial Thoughts:

1. This will be the first page when the web application opens
2. All the articles will be stacked on top of each other
3. Use `ul` to create a dynamic list of the articles
4. Get the headline from "fields>headline" in the .json file
5. Use "useEffect" to make sure the articles load after the page has rendered

Components:

1. Header
2. Footer
3. ArticleList

Tests:

**Test 1** - The Header renders

**Test 2** - The Footer renders

**Test 3** - when rendering ArticleList, "Articles loading..." should display when data length is 0

**Test 4** - when rendering ArticleList, a list of articles should display when data contains an article object

---

### Part 2

```md
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

User Story Breakdown:

- They want a picture to go with every headline story

Initial Thoughts:

1. Get the image from "fields>thumbnail" in the .json file

---

## Extended Criteria

---

### Part 3

```md
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

User Story Breakdown:

- When they click on the headline, a picture and summary of the article will pop up

---

### Part 4

```md
As a busy politician
So I can get a few more details about an important story
I can click a news article summary title which links to the original article
```

User Story Breakdown:

- When they click on the summary, it will lead them to the entire article

---

### Part 5

```md
As a busy politician
Just in case my laptop breaks
I can read the site comfortable on my phone
```

User Story Breakdown:

- Make the application responsive to the device size

Initial Thoughts:

1. Use bootstrap to make application responsive

---

## Mock Up

---

### Headlines page

![Headlines page mock up](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mock up](/images/news-summary-project-article-page-mockup.png)

---
