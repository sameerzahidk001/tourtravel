import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { categories, contacts, faqs, gallery, money, places, socials, tours, travelSite, waLink } from "./data";
import { Seo } from "./seo";

const rentals = [
  { name: "Toyota Corolla", kind: "Sedan · With driver", seats: "5 seats", gear: "Automatic", rate: 8500, note: "City, airport, meetings" },
  { name: "Honda BR-V", kind: "Crossover · With driver", seats: "7 seats", gear: "Automatic", rate: 12000, note: "Family days and the highway" },
  { name: "Toyota Land Cruiser", kind: "4x4 · With driver", seats: "7 seats", gear: "Automatic", rate: 28000, note: "Northern roads and out-station" },
  { name: "Mini coach", kind: "Coach · With driver", seats: "Group", gear: "With driver", rate: 22000, note: "Weddings and tour groups" },
];

const nav = [
  ["/", "Home"],
  ["/tours", "Tours"],
  ["/rental", "Rent a car"],
  ["/gallery", "Gallery"],
  ["/about", "About"],
  ["/book", "Book"],
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Shell({ children }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>24/7 tour service · Sikender Hayat</span>
          <a href="tel:+923092619096">0309-2619096</a>
        </div>
      </div>
      <div className="notice-bar">
        <div className="wrap">
          <strong>Confirm the price before you book.</strong>
          <span>Request a quotation first. A tour or a car is not booked until Sikender Hayat confirms the fare on WhatsApp.</span>
        </div>
      </div>
      <header className="nav">
        <div className="wrap">
          <Link to="/" className="brand">
            <img src="/media/logo.jpg" alt="Star Tour and Rent a Car" />
            <div><strong>Star Tour</strong><span>Tour trips</span></div>
          </Link>
          <button className="menu" aria-label="Menu" onClick={() => setOpen((v) => !v)}>☰</button>
          <nav className={open ? "links open" : "links"}>
            {nav.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => (isActive ? "active" : "")}>{label}</NavLink>
            ))}
            <a className="btn" href={waLink("Hello Star Tour, I want to plan a tour.")}>WhatsApp</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="wrap">
          <div>
            <strong>Star Tour</strong>
            <p>Tour trips and rent a car with driver. Sikender Hayat. startour.travel</p>
          </div>
          <div className="phones">
            {socials.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>)}
            <a href={travelSite()}>Rent a car site</a>
          </div>
        </div>
      </footer>
      <a className="wa" href={waLink("Hello Star Tour, I want to book a tour.")}>WhatsApp</a>
    </>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">Hunza · Skardu · Naran Kaghan · Swat · Kalam</p>
            <h1>The long road north, arranged for you.</h1>
            <p className="lede">Rent a car with driver from Islamabad. Private tours to Hunza, Skardu, Naran Kaghan, Swat, and Kalam. Ask for a quotation first. The car is booked only after Sikender Hayat confirms the price.</p>
            <div className="actions">
              <Link className="btn" to="/tours">See the tours</Link>
              <Link className="btn-line" to="/rental">Rent a car</Link>
            </div>
          </div>
          <div className="hero-photo">
            <video src="/media/hero.mp4" poster="/media/cover.jpg" autoPlay muted loop playsInline />
            <div className="hero-card"><strong>Skardu these days</strong><span>If you want to explore, this is the road north.</span></div>
          </div>
        </div>
      </section>
      <section className="band tight">
        <div className="wrap">
          <TourSearch />
        </div>
      </section>
      <section className="band">
        <div className="wrap facts">
          <div className="fact"><b>24/7</b><span>Late airport and event pickups</span></div>
          <div className="fact"><b>Out-station</b><span>City and beyond, unlimited miles</span></div>
          <div className="fact"><b>Your car</b><span>SUV, sedan, crossover, or coach</span></div>
          <div className="fact"><b>One call</b><span>Sikender Hayat confirms the fare</span></div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <div><p className="kicker">Tours</p><h2>Hunza, Skardu, Naran Kaghan, Swat and Kalam.</h2></div>
            <Link to="/tours">All tours</Link>
          </div>
          <div className="destinations">
            {places.filter((item) => item.id !== "Any" && item.id !== "Family").map((item) => (
              <Link key={item.id} to={`/tours?place=${encodeURIComponent(item.id)}`}>{item.label}</Link>
            ))}
          </div>
          <div className="cards">
            {tours.map((tour) => (
              <Link key={tour.slug} to={`/tours/${tour.slug}`} className="card">
                <img src={tour.image} alt={`${tour.title} with driver`} />
                <div className="body">
                  <div className="meta">{tour.place} · {tour.days}</div>
                  <h3>{tour.title}</h3>
                  <p>{tour.line}</p>
                  <p className="price">{tour.rate ? <><b>{money(tour.rate)}</b> <span className="muted">/ {tour.unit} · guide only</span></> : <><b>Quotation</b> <span className="muted">/ {tour.unit}</span></>}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ClipSection />
      <RentalSection />
      <section className="band">
        <div className="wrap split">
          <div className="flyer"><img src="/media/logo.jpg" alt="Star Tour and Rent a Car service card" /></div>
          <div>
            <p className="kicker">The desk</p>
            <h2>Sikender Hayat, on the card.</h2>
            <p className="lede">Airport pick and drop, weddings, meetings, shopping, out-station tours, unlimited miles, and a backup car. The fare is agreed on WhatsApp before you travel.</p>
            <ul className="ticks">
              <li>0309-2619096 WhatsApp</li>
              <li>0324-4216936 WhatsApp</li>
              <li>0349-4127214 Call</li>
              <li>24/7 service</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap">
          <div className="section-head"><h2>From the page.</h2><Link to="/gallery">Gallery</Link></div>
          <div className="mosaic">
            {gallery.slice(0, 5).map((shot) => <Link key={shot.src} to="/gallery"><img src={shot.src} alt={shot.title} /></Link>)}
          </div>
        </div>
      </section>
      <section className="band">
        <div className="wrap cta">
          <div>
            <h2>Ready when the weather is.</h2>
            <p>Islamabad can be rainy and the north still open. Message the date and we will tell you if the road makes sense.</p>
          </div>
          <Link className="btn gold" to="/book">Plan the trip</Link>
        </div>
      </section>
    </>
  );
}

function TourSearch() {
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const [place, setPlace] = useState(params.get("place") || "Any");
  const [date, setDate] = useState(params.get("date") || "");
  const [people, setPeople] = useState(params.get("people") || "4");
  function submit(event) {
    event.preventDefault();
    navigate(`/tours?${new URLSearchParams({ place, date, people })}`);
  }
  return (
    <form className="finder" onSubmit={submit}>
      <label>Where
        <select value={place} onChange={(event) => setPlace(event.target.value)}>
          {places.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
        </select>
      </label>
      <label>Start date<input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label>
      <label>People<input type="number" min="1" max="30" value={people} onChange={(event) => setPeople(event.target.value)} /></label>
      <button className="btn" type="submit">Search tours</button>
    </form>
  );
}

const clips = [
  { src: "/media/clip-valley.mp4", poster: "/media/cover.jpg", title: "High valleys", text: "The open country on the way toward Skardu." },
  { src: "/media/clip-road.mp4", poster: "/media/reel-road.jpg", title: "Mountain highway", text: "The kind of road the car follows out of the city." },
];

function ClipSection() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Clips</p>
            <h2>A look at the road.</h2>
          </div>
        </div>
        <div className="clips">
          {clips.map((clip) => (
            <figure key={clip.src}>
              <video src={clip.src} poster={clip.poster} autoPlay muted loop playsInline controls />
              <figcaption><strong>{clip.title}</strong><span>{clip.text}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function RentalSection() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="kicker">Rent a car · With driver</p>
            <h2>Rent a car with driver.</h2>
          </div>
          <Link to="/rental">Rental desk</Link>
        </div>
        <div className="fleet">
          {rentals.map((car) => (
            <article className="fact" key={car.name}>
              <div className="meta">{car.kind}</div>
              <b>{car.name}</b>
              <span>{car.seats} · {car.gear}</span>
              <p className="price"><b>{money(car.rate)}</b></p>
              <span>{car.note}. With driver. Self-drive is not available. Guide rate only — request a quotation.</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Rental() {
  return (
    <section className="band">
      <div className="wrap">
        <p className="kicker">Rent a car · With driver</p>
        <h1>A driver comes with every vehicle.</h1>
        <p className="lede">Self-drive is not available. Sedan, crossover, SUV, and the mini coach are sent with a driver. Request a quotation before you book.</p>
        <div className="quote">
          <strong>Request a quotation first</strong>
          <p>The day rates below are a guide. The car is not reserved until Sikender Hayat confirms the price on WhatsApp.</p>
        </div>
        <div className="cards">
          {rentals.map((car) => (
            <article className="card" key={car.name}>
              <div className="body">
                <div className="meta">{car.kind}</div>
                <h3>{car.name}</h3>
                <p>{car.note}. {car.seats}, {car.gear}. Self-drive is not available.</p>
                <p className="price"><b>{money(car.rate)}</b> <span className="muted">/ day guide</span></p>
                <a className="btn" href={waLink(`Hello, I want a quotation for the ${car.name} with a driver.`)}>Request quotation</a>
              </div>
            </article>
          ))}
        </div>
        <p className="muted">Pickup cities and return dates are on the <a href={travelSite()}>rent-a-car site</a>. That desk is also with driver only.</p>
      </div>
    </section>
  );
}

function Tours() {
  const params = new URLSearchParams(useLocation().search);
  const place = params.get("place") || "Any";
  const date = params.get("date") || "";
  const people = params.get("people") || "";
  const [cat, setCat] = useState(place === "Any" ? "All" : place);
  useEffect(() => { setCat(place === "Any" ? "All" : place); }, [place]);
  const list = cat === "All" ? tours : tours.filter((tour) => tour.category === cat);
  const carry = new URLSearchParams();
  if (date) carry.set("date", date);
  if (people) carry.set("people", people);
  const suffix = carry.toString();
  return (
    <section className="band">
      <div className="wrap">
        <p className="kicker">Tour list</p>
        <h1>Choose a road. We bring the car.</h1>
        <TourSearch />
        {(date || people) && (
          <p className="muted">
            {people ? `${people} people` : "Your group"}{date ? `, starting ${date}` : ""}.
            {Number(people) >= 8 ? " Eight or more usually take the mini coach." : " Sikender Hayat confirms the car on WhatsApp."}
          </p>
        )}
        <div className="filters">
          {categories.map((item) => (
            <button key={item} type="button" className={cat === item ? "on" : ""} onClick={() => setCat(item)}>{item}</button>
          ))}
        </div>
        <div className="cards">
          {list.map((tour) => (
            <Link key={tour.slug} to={`/tours/${tour.slug}${suffix ? `?${suffix}` : ""}`} className="card">
              <img src={tour.image} alt={`${tour.title} with driver`} />
              <div className="body">
                <div className="meta">{tour.place} · {tour.days}</div>
                <h3>{tour.title}</h3>
                <p>{tour.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TourDetail() {
  const { slug } = useParams();
  const params = new URLSearchParams(useLocation().search);
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) return <section className="band"><div className="wrap"><h1>That tour is not listed.</h1><Link to="/tours">Tours</Link></div></section>;
  return (
    <section className="band">
      <div className="wrap detail">
        <div>
          <img className="cover" src={tour.image} alt={`${tour.title} with driver`} />
          <div className="steps">{tour.plan.map((step) => <div className="step" key={step.day}><b>{step.day}</b><span>{step.text}</span></div>)}</div>
        </div>
        <div className="panel">
          <div className="meta">{tour.place} · {tour.days}</div>
          <h1 style={{ fontSize: "clamp(36px, 4vw, 54px)" }}>{tour.title}</h1>
          <p>{tour.summary}</p>
          <p className="price">{tour.rate ? <><b>{money(tour.rate)}</b> <span className="muted">/ {tour.unit} · guide only</span></> : <><b>Quotation</b> <span className="muted">before booking</span></>}</p>
          <div className="quote">
            <strong>Confirm this price before you book</strong>
            <p>Request a quotation. This trip is not reserved until Sikender Hayat confirms the fare.</p>
          </div>
          <ul className="ticks">{tour.includes.map((item) => <li key={item}>{item}</li>)}</ul>
          <div className="actions">
            <Link className="btn" to={`/book?${new URLSearchParams({ tour: tour.slug, date: params.get("date") || "", people: params.get("people") || "" })}`}>Request quotation</Link>
            <a className="btn-line" href={waLink(`Hello Star Tour, please send a quotation for the ${tour.title}. I will confirm the price before booking.`)}>WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="band">
      <div className="wrap">
        <p className="kicker">Gallery</p>
        <h1>Photos from our own posts.</h1>
        <div className="gallery" style={{ marginTop: 16 }}>
          {gallery.map((shot) => (
            <figure key={shot.src}><img src={shot.src} alt={shot.title} /><figcaption><strong>{shot.title}</strong><br /><span className="muted">{shot.caption}</span></figcaption></figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="band">
      <div className="wrap split">
        <div>
          <p className="kicker">About</p>
          <h1>Star Tour & Rent a Car.</h1>
          <p className="lede">A travel company. The page says tour trip. The reels are Skardu. The album includes Swat Museum. Sikender Hayat is the name on the card, with a 24/7 car desk beside the tours.</p>
          <div className="phones" style={{ marginTop: 16 }}>{contacts.map((item) => <a key={item.value} href={item.href}>{item.label} {item.value}</a>)}</div>
          <FaqList />
        </div>
        <div className="flyer"><img src="/media/logo.jpg" alt="Service card" /></div>
      </div>
    </section>
  );
}

function Book() {
  const params = new URLSearchParams(useLocation().search);
  const preset = tours.find((tour) => tour.slug === params.get("tour"))?.title || "Skardu road tour";
  const [form, setForm] = useState({ name: "", phone: "", tour: preset, date: params.get("date") || "", people: params.get("people") || "4", note: "" });
  const set = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }));
  function submit(event) {
    event.preventDefault();
    const text = [`Hello Star Tour, I am requesting a quotation. Please confirm the price before I book.`, `Name: ${form.name}`, `Phone: ${form.phone}`, `Tour: ${form.tour}`, `Date: ${form.date || "flexible"}`, `People: ${form.people}`, form.note].filter(Boolean).join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }
  return (
    <section className="band">
      <div className="wrap detail">
        <div>
          <p className="kicker">Quotation</p>
          <h1>Ask for the price before you book.</h1>
          <div className="quote">
            <strong>This form does not confirm a booking</strong>
            <p>It opens WhatsApp so Sikender Hayat can send the quotation. Book only after you accept that price.</p>
          </div>
          <form className="form panel" onSubmit={submit}>
            <label>Name<input required value={form.name} onChange={set("name")} /></label>
            <label>Phone<input required value={form.phone} onChange={set("phone")} /></label>
            <label>Tour<select value={form.tour} onChange={set("tour")}>{tours.map((tour) => <option key={tour.slug}>{tour.title}</option>)}<option>Car rental only</option></select></label>
            <label>Start date<input type="date" value={form.date} onChange={set("date")} /></label>
            <label>People<input value={form.people} onChange={set("people")} /></label>
            <label>Notes<textarea value={form.note} onChange={set("note")} /></label>
            <button className="btn" type="submit">Request quotation</button>
          </form>
        </div>
        <div className="panel">
          <h2>What we need</h2>
          <ul className="ticks">
            <li>Where the trip starts</li>
            <li>How many people</li>
            <li>Hunza, Skardu, Naran Kaghan, Swat, or Kalam</li>
            <li>With driver only. Self-drive is not available</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FaqList() {
  const [open, setOpen] = useState(0);
  return (
    <div style={{ marginTop: 18 }}>
      {faqs.map((item, index) => (
        <div className="faq" key={item.q}>
          <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>{item.q}</button>
          {open === index && <p>{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Seo />
      <Shell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:slug" element={<TourDetail />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<section className="band"><div className="wrap"><h1>Page not found.</h1><Link to="/">Home</Link></div></section>} />
        </Routes>
      </Shell>
    </>
  );
}
