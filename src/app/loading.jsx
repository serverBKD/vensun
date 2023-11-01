function loading () {
  return (
    <section className="w-full h-screen grid place-items-center bg-indigo-600 text-white">
      <div >
        <h1 className="text-2xl">loading...</h1>
        {/* <!-- TODO spinner --> */}
        <div className="rounded-full w-20 h-20 bg-lime-600 grid place-items-center border-r-white">
                  <div className="rounded-full w-10 h-10 bg-white"></div>
        </div>
      </div>
    </section>
  )
}

export default loading
