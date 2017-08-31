import {join} from 'path';
import test from 'ava';
import fullPath from '../../src/lib/full-path';

test('fullPath()', t => {
  t.is(
    fullPath('test.postcss', '/my/dir/file.html'),
    join('my', 'dir', 'test.postcss'),
    'should return the full path of a source based on the path of the resource file'
  );
});