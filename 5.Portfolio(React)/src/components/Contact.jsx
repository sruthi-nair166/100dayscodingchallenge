function Contact() {
  return (
    <>
      <h2>Contact</h2>

      <fieldset>
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <br />
          <br />

          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <br />
          <br />

          <label for="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            placeholder="Enter a subject"
            required
          />

          <br />
          <br />

          <label for="message">Message:</label>
          <textarea
            id="message"
            placeholder="Enter a message"
            rows="5"
            cols="15"
            required
          ></textarea>

          <br />
          <br />

          <div class="btn-wrapper">
            <button type="reset">Clear</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </fieldset>
    </>
  );
}

export default Contact;
