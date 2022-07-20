// import React from 'react';
// import loader from '../gif/spinner.gif';

// const Loader = () => {
//     return (
//         <div>
//             <img src={loader} alt='loader' className='w-full' />
//         </div>
//     );
// };

// export default Loader;


import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleIndeterminate = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader indeterminate>Preparing Files</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderExampleIndeterminate
