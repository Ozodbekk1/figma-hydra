import "./pages.css";

const Connect = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "39d77beb-7940-4a28-b120-ff11b2423e85");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <section>
      <form onSubmit={onSubmit} className="connect-form ">
        <h1>Join HYDRA</h1> <hr /> <br />
        <h1>Let’s Build Your VR Experience</h1>
        <div>
          <label>
            Full Name
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              name="name"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email Address
            <input
              type="email"
              className="field"
              placeholder="Enter your email"
              name="email"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Your Message
            <textarea
              name="message"
              className="field mess"
              placeholder="Enter your message"
              required
            ></textarea>
          </label>
        </div>
        <button type="submit" className="submit-btn">
          Send to HYDRA
        </button>
      </form>
    </section>
  );
};

export default Connect;
