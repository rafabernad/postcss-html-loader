import {join} from 'path';
import test from 'ava';
import fullPaths from '../../src/lib/full-paths';

test('fullPaths()', t => {
  t.deepEqual(
    fullPaths(['test.postcss', 'test2.postcss'], 'my/dir/file.html'),
    [join('my', 'dir', 'test.postcss'), join('my', 'dir', 'test2.postcss')],
    'should return the full paths of a sources array based on the path of the resource file'
  );
});