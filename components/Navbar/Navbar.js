import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link legacyBehavior href="/">
            <span
              className="navbar-brand"
              aria-current="page"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
              style={{ cursor: 'pointer' }}
            >
              Next App
            </span>
          </Link>
          {/* <a className="navbar-brand" href="#">Code.io</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link legacyBehavior href="/">
                  <span
                    className="nav-link active"
                    aria-current="page"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    style={{ cursor: 'pointer' }}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/blog">
                  <span
                    className="nav-link active"
                    aria-current="page"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    style={{ cursor: 'pointer' }}
                  >
                    Blog
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/membres">
                  <span
                    className="nav-link active"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    aria-current="page"
                    style={{ cursor: 'pointer' }}
                  >
                    Members
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/galery">
                  <span
                    className="nav-link active"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    aria-current="page"
                    style={{ cursor: 'pointer' }}
                  >
                    Images
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link legacyBehavior href="/vocab">
                  <span
                    className="nav-link active"
                    aria-current="page"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    style={{ cursor: 'pointer' }}
                  >
                    Vocab
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/listes">
                  <span
                    className="nav-link active"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    aria-current="page"
                    style={{ cursor: 'pointer' }}
                  >
                    Listes
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/page-api">
                  <span
                    className="nav-link active"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    aria-current="page"
                    style={{ cursor: 'pointer' }}
                  >
                    Api (GET)
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/add">
                  <span
                    className="nav-link active"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    aria-current="page"
                    style={{ cursor: 'pointer' }}
                  >
                    Api (POST)
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/contact">
                  <span
                    className="nav-link active"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    aria-current="page"
                    style={{ cursor: 'pointer' }}
                  >
                    Jokes(bad)
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/cours">
                  <span
                    className="nav-link active"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    aria-current="page"
                    style={{ cursor: 'pointer' }}
                  >
                    BTC
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/article">
                  <span
                    className="nav-link active"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    aria-current="page"
                    style={{ cursor: 'pointer' }}
                  >
                    Articles
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/api/vocapi">
                  <span
                    className="nav-link active"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                    aria-current="page"
                    style={{ cursor: 'pointer' }}
                  >
                    API raw
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
