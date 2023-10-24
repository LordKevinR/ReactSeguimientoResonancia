function Error({children}) {
  return (
    <div className="bg-red-600 text-white text-center p-2 uppercase font-bold mb-5 rounded-lg">
        {children}
    </div>
  )
}

export default Error