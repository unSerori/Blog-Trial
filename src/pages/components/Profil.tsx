import { Box, Flex, Text } from '@chakra-ui/react'

export default function Profil() {
    return (
        <>
            <Flex w={'100%'} h={'50rem'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} marginTop={'40rem'}>
                <Text fontSize={'5xl'} paddingBottom={'2rem'}>＜Profil＞</Text>
                <Flex w={'90rem'} h={'40rem'} bg={'#fff'} justifyContent={'center'} alignItems={'center'} boxShadow={'dark-lg'}>
                    <Flex w={'40rem'} h={'35rem'} bg={'purple'} justifyContent={'center'} alignItems={'center'} marginRight={'5rem'}>
                        <Text fontSize={'4xl'} color={'#fff'} fontWeight={'extrabold'}>ECC</Text>
                    </Flex>
                    <Box w={'40rem'} h={'35rem'}>
                        <Text fontSize={'2xl'} padding={'2rem 2rem 2rem 0'}>
                            現在、ECCコンピュータ専門学校に通う、2年生。<br />
                            日々デザイン、フロントエンド、バックエンドについて勉強している。
                            この私のブログでは私が勉強したことや、気になったこと、手こずったことなどをまとめて、
                            他のわからない人のために記事にしてまとめています。私が自分で記事を書いているので間違っているところがあるかも知れません。
                            その際はご了承ください。
                            記事を見てなにか不明な点や、もっとこうしたほうが良いや、こういう記事を出してほしいがございましたら
                            メールフォームの方からお願いします。
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}