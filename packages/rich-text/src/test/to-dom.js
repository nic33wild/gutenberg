/**
 * Internal dependencies
 */

import { toDom } from '../to-dom';
import { spec } from './helpers';

describe( 'recordToDom', () => {
	beforeAll( () => {
		// Initialize the rich-text store.
		require( '../store' );
	} );

	spec.forEach( ( {
		description,
		multilineTag,
		multilineWrapperTags,
		record,
		startPath,
		endPath,
	} ) => {
		it( description, () => {
			const { body, selection } = toDom( {
				value: record,
				multilineTag,
				multilineWrapperTags,
			} );
			expect( body ).toMatchSnapshot();
			expect( selection ).toEqual( { startPath, endPath } );
		} );
	} );
} );
