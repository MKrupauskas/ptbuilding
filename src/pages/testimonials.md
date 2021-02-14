---
title: Testimonials
sections:
  - type: section_hero
    title: Testimonials
    section_id: hero
    image: images/banner.jpg
    content: You're in good company.
  - type: section_grid
    section_id: showcase
    col_number: three
    grid_items:
      - type: grid_item
        title: Jane Doe
        content: Always delivering what's promised so rare to find! Highly recommended.
      - type: grid_item
        title: Joe Raff
        content: Brilliant company with great management and communication channels, created a pleasant experience working with them. All questions I had about my kitchen answered in timely manner, upon request introduced current step and always informed about any changes in decided time frame for my kitchen. Highly recommend!
      - type: grid_item
        title: Richard Barner
        content: My kitchen looks amazing! Thank you again :)
      - type: grid_item
        title: Helen Stood
        content: Highly recommend, extremely competent and reliable construction professionals.
        actions:
          - type: action
            label: Read more
            url: /testimonial-helen-stood
            style: link
  - type: section_content
    title: Leave your testimonial
    content: >
      <form name="testimonial" method="POST" action="/thank-you" data-netlify="true" style="text-align: left;">
        <input type="hidden" name="form-name" value="testimonial" />
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Message <textarea name="message"></textarea></label>
        </p>
        <p>
          <button class="button" type="submit">Send</button>
        </p>
      </form>
  - type: section_cta
    title: Let us help you with your project.
    section_id: cta
    subtitle: Contact us and we will reach out to you as soon as possible.
    actions:
      - type: action
        label: Contact Us
        url: /docs/getting-started/installation
        style: primary
template: advanced
---
