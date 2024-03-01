import '../../css/project-base.css';

const Property = (props) => {
  return (
    <>
      <div className="container relative w-full hover:border-2 hover:border-gray-600">
        <div class="absolute inset-0 h-12 bg-gradient-to-t from-transparent to-[rgba(0,0,0,0.5)] text-white font-bold text-xl flex items-end p-3">0.1 ETH</div>
        <div className="absolute px-3 text-sm font-bold text-gray-800 bg-gray-200 rounded-md right-3 bottom-3">Collection 1</div>
        <img src="/img/NFT_sample.jpg" alt="Avatar" className="image"></img>
        <div className="overlay">
          <div className="absolute text-2xl font-bold text-white top-1/2 left-1/2" style={{transform: "translate(-50%, -50%)"}}>NFT Club Collection 1</div>
        </div>
      </div>
    </>
  );
}

export default Property;
