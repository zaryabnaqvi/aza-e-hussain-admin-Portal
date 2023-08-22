import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
<>
<div className='mt-5 text-center text-danger'>
  <Spinner animation="border" variant="danger" size="lg" />
  </div>
  </>
)}

export default Loader;