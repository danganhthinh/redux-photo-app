import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import PhotoList from 'features/Photo/components/PhotoList';

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector(state => state.photos);

  console.log('lisst', photos);
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>

      {/* <PhotoList>
        
      </PhotoList> */}
    </div>
  );
}

export default MainPage;