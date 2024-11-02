import React, { ReactNode} from 'react';

import { Box } from '@chakra-ui/react';

interface Props {
    name: ReactNode;
    src: string
}

const Avatar = ({name, src}: Props) => {
    return(
        <Box>
            name
        </Box>
    );
};

export default Avatar;
