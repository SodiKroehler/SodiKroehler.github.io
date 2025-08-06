---
layout: default
title: Sodi Kroehler
papers:
  - skpub_s-f-k_spotlightLessonsLearned
  - skpub_k-l_polaritySwitching
---

## About
<img src="assets/2024_portrait.png" alt="Sodi Kroehler" style="width:120px; border-radius:8px; float:right; margin-left:15px;">

I'm Sodi Kroehler, currently studying for my Master's in CS at the University of Pittsburgh. My focus is algorithmic ethics, or more broadly computational social science. Presently, I'm working under Dr. [Yu-ru Lin](https://www.yurulin.com/) at the [PICSO](https://picsolab.github.io/) lab. 

## Contact
I, unfortunately, don't do autographs at all and only do hugs on certain days. If you're looking for anything else, feel free to write me at <sodikroehler@gmail.com>.

* [LinkedIn](www.linkedin.com/in/sodi-kroehler)
* [CV](assets/pdfs/CV_KROEHLER_SODI.pdf)
* [resume](assets/pdfs/RESUME_KROEHLER_SODI.pdf)
* [Github](https://github.com/SodiKroehler)
* [X/Twitter](https://x.com/sodi_kroehler)
* [ORCID](https://orcid.org/0009-0007-8911-140X)
<!-- [Scholar]() -->

## Publications

<ul>
{% for pid in page.papers %}
  {% assign paper = site.data.pubs[pid] %}
  <li>
    <strong>{{ paper.title }}</strong><br>
    {{ paper.authors | join: ", " }}<br>
    {% if paper.publishing_info %}
      <em>{{ paper.publishing_info }}</em>
      {% if paper.date %}, {{ paper.date | date: "%Y" }}{% endif %}<br>
    {% elsif paper.date %}
      <em>{{ paper.date | date: "%Y" }}</em><br>
    {% endif %}
    {% if paper.url %}
      <a href="{{ paper.url }}">[Link]</a>
    {% endif %}
    {% if paper.pdf %}
      <a href="{{ paper.pdf }}">[PDF]</a>
    {% endif %}
  </li>
{% endfor %}
</ul>


## Projects
### Chitters: Online Card Game
- **Description:** An online card game, similar in gameplay to Cards Against Humanity.
- **Technologies:** React Native, Redux, NextJS, TypeScript, Prisma, Pusher/WebRTC
- **Links:** [Website](https://www.chitters.net/)

### Cardui: LLM Utility Package
- **Description:** A simple wrapper around most major LLM providers, written in python. Enables within-prompt batching as well as significantly reduces boilerplate when running prompts on pandas dataframes.
- **Technologies:** Python
- **Links:** [Website](https://test.pypi.org/project/cardui/)
