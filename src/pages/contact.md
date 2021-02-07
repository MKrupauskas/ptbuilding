---
title: Contact
subtitle: Send us a message and we will discuss your project as soon as possible.
image: images/banner.jpg
template: page
---

<form name="contact" method="POST" action="/thank-you" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <p>
    <label>Name <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Phone <input type="tel" name="phone" /></label>
  </p>
  <p>
    <label>Message <textarea name="message"></textarea></label>
  </p>
  <p>
    <button class="button" type="submit">Send</button>
  </p>
</form>
