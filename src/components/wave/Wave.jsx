
import Wave from 'react-wavify'

const Waves = () => {
  return (
    <Wave fill='#02d6f7'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 10,
          amplitude: 40,
          speed: 0.35,
          points: 5
        }}
  />
     

    
  );
};

export default Waves;
