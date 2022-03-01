import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Container from './components/Container';
import Item from './components/Item';
import './header.css';

const SearchBarSchema = Yup.object().shape({
  search: Yup.string().required('Required'),
});

const App = () => {
  const [photos, setPhotos] = useState([]);

  console.log({ photos });

  return (
    <div className="App">
      <header>
        <Formik
          initialValues={{
            search: '',
          }}
          validationSchema={SearchBarSchema}
          onSubmit={async (values) => {
            const url = `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`;
            const res = await fetch(url, {
              headers: {
                Authorization:
                  'Client-ID Vq2xG7ahfahv-OlBzI6OOMKAsGguIJApF0ogSWWlh0k',
              },
            });
            const data = await res.json();
            console.log(values);
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
      <Container>
        {photos.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Container>
    </div>
  );
};

export default App;
