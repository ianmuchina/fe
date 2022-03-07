# Advice generator app

![](./design/desktop-design.jpg)

_(overengineered)_ solution to the
[Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

The site is built with HTML, CSS & Javascript. For the advice, I pre downloaded
all of it (14kb) then put it inside the javascript file. This makes the dice
rolling fast.

## Using the site

The site loads random advice by default. If you want to load a specific advice,
add it as a url fragment.

eg: To go to load advice `100`, add `#100` to the url.

If the url fragment is invalid, a random advice will be loaded.

An invalid url fragment is one that is either:

- not a number
- greater than 224.

## Process

I downloaded responses from the api with the `clone.sh` shell script.

The script saves the data to a json file with this format.

```js
[
  { slip: { id: 3, advice: "Don't eat non-snow-coloured snow." } },
  { slip: { id: 4, advice: "Cars are bad investments." } },
  { slip: { id: 5, advice: "If you have the chance, take it!" } },
];
```

After that I manually converted it to an array then embeded the data in the
script.

## Bugs

I plan on getting to this later.

1. The api always returns errors if the id is either `22`, `48`, or `67`. I
   don't know why.

2. The api respomses have unicode escape characters on advice `146` and `76`.
   I'm having trouble displaying them in html.

   eg: `\u00c3\u00a4` appears as `Ã¤` instead of `ä`.

## Further development

- Overengineer even more by making a css only solution

## Author

- Website - [ianmuchina.com](https://ianmuchina.com)
- Frontend Mentor -
  [@ianmuchina](https://www.frontendmentor.io/profile/ianmuchina)
- Twitter - [@much1na](https://www.twitter.com/much1na)
