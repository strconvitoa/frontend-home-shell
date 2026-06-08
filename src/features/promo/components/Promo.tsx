import logo from '../../../logo.png';
export default function Promo() {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full bg-white px-12 py-10">
      <img src={logo} alt="Martian" className="h-150 w-150 object-cover" />

      {/* Headline */}
      <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-2">
        We make legal services
        <br />
        feel less{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          martian
        </span>
        .
      </h2>
    </div>
  );
}
