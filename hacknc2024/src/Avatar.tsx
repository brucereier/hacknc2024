import React, { ReactNode} from 'react';

import { Box, Image, Link } from '@chakra-ui/react';

interface Props {
    name: string;
    src: string
}

function avatarClick( name: string ) {
    console.log( name );
    <Link href={'/profile?name=${name}'} ></Link>
}

const Avatar = ({name, src}: Props) => {
    return(
        <Box onClick={() => avatarClick(name)}>
            <Image
                src={src}
            />
        </Box>
    );
};

export default Avatar;
