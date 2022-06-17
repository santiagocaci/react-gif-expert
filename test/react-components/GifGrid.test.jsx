import { render, screen } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import { GifGrid } from '../../src/react-components';

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en <GifGrid />', () => {
  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
    // screen.debug();
  });

  test('debe de mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => {
    const gifs = [
      {
        id: 'abec',
        title: 'saitama',
        url: 'https://localhost:3000/saitama.jpg',
      },
      {
        id: '123',
        title: 'goku',
        url: 'https://localhost:3000/goku.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    console.log(screen.getAllByRole('img').length);

    expect(screen.getAllByRole('img')).toHaveLength(2);
    // screen.debug();
  });
});
