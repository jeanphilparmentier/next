import Link from 'next/link'

export default function index(props) {
  console.log(props)

  return (
    <div className="container px-4 py-5" style={{ minHeight: '600px' }}>
      <h1 className="text-center">Le Blog</h1>
      <div className="row">
        <div className="div-desc col-12 col-sm-10 col-lg-7 col-xl-8 ms-auto me-auto mb-5">
          <p className="mt-5">Explications du développeur :</p>
          <ul className="ul-desc">
            <li>Explications (soyez patients ⏳).</li>
            <li>
              [Work in progress] Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ab sequi dignissimos cum obcaecati labore
              consequatur voluptatum ducimus quaerat, illo quos quibusdam
              distinctio velit nemo? Ab, eligendi ut!
            </li>
          </ul>
        </div>
      </div>
      <Link legacyBehavior href={`/article/10 plats basques`}>
        <a>10 plats Basques</a>
      </Link>
    </div>
  )
}
