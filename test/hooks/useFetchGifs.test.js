import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('pruebas en useFetchGifs', () => {
  test('debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { images, isLoading } = result.current;

    expect(images).toHaveLength(0);
    expect(isLoading).toBe(true);
  });

  test('debe de retornar un arreglo de imagenes y isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));

    // espera hasta que el tamanio del array del resultado sea mayor a 0
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 6000 }
    );
    const { images, isLoading } = result.current;

    expect(images).not.toHaveLength(0);
    expect(isLoading).not.toBe(true);
  });
});
