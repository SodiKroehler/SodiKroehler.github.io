---
layout: default
title: Home
papers:
  - paper1
  - paper2
---

## About
I'm Sodi Kroehler, currently studying for my Master's in CS at the University of Pittsburgh. My focus is algorithmic ethics, or more broadly computational social science. Presently, I'm working under Dr. [Yu-ru Lin](https://www.yurulin.com/) at the [PICSO](https://picsolab.github.io/) lab. 

## Contact
I, unfortunately, don't do autographs at all and only do hugs on certain days. If you're looking for anything else, feel free to write me at <sodikroehler@gmail.com>.

* [LinkedIn](www.linkedin.com/in/sodi-kroehler)
* [CV](https://www.icloud.com/iclouddrive/0b5cfx9ZM7EOiYT8eYOkn4YVg#KROEHLER%5FSODI%5FCV%5F2)
* [resume](https://www.icloud.com/iclouddrive/05aOJygw9u79zR8hNrxIwjDhg#KROEHLER%5FSODI7)
* [Github](https://github.com/SodiKroehler)
* [birdApp](https://x.com/sodi_kroehler)
* [ORCID](https://orcid.org/0009-0007-8911-140X)
<!-- [Scholar]() -->

## Publications
<ul>
{% for pid in page.papers %}
  {% assign paper = site.data.publications[pid] %}
  <li>
    <strong>{{ paper.title }}</strong><br>
    {{ paper.authors }}<br>
    <em>{{ paper.venue }}</em>, {{ paper.year }}<br>
    <a href="{{ paper.pdf }}">[PDF]</a>
  </li>
{% endfor %}
</ul>


## Projects
### Chitters: Online Card Game
- **Description:** An online card game, similar in gameplay to Cards Against Humanity.
- **Technologies:** React Native, Redux, NextJS, TypeScript, Prisma, Pusher/WebRTC
- **Links:** [Website](https://www.chitters.net/)


## Cool Stuff

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <img alt="Shows an illustrated sun in light color mode and a moon with stars in dark color mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>