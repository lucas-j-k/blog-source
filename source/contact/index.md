---
title: Contact Me
seo_title: Get in touch | Web developer and designer | Norfolk
description: Fill in the contact form to get in touch
date: 2018-02-07 21:22:20
slug: contact
---

Fill in the form below to get in touch

<div class="contact-form__wrap" id="contact_form">
  <form class="contact-form__form" action="https://formspree.io/contact.nocturneworks@gmail.com" method="POST">
      <label for="name" class="contact-form__label">Name:</label>
      <input type="text" name="name" value="" class="contact-form__input contact-form__input--text" >
      <label for="_replyto" class="contact-form__label">Email</label>
      <input type="email" name="_replyto" value="" class="contact-form__input contact-form__input--email">
      <label for="message" class="contact-form__label">Message:</label>
      <textarea name="message" class="contact-form__input contact-form__input--textarea"></textarea>
      <input type="submit" value="Send" class="contact-form__input--submit">
      <input type="hidden" name="_subject" value="Website form submission" />
      <input type="hidden" name="_next" value="https://lucas-j-k.github.io/contact/" />
  </form>
</div>

<script>
    var contactform =  document.getElementById('contact_form');
    contactform.setAttribute('action', 'https://formspree.io/' + 'contact.nocturneworks' + '@' + 'gmail' + '.' + 'com');
</script>
