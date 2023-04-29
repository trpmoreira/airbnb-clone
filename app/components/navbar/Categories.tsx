"use client"

import Container from "../Container"
import CategoryBox from "../CategoryBox"
import { usePathname, useSearchParams } from "next/navigation"

//icons
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { FaSkiing } from 'react-icons/fa'
import { BsSnow } from 'react-icons/bs'
import { IoDiamond } from 'react-icons/io5'

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills nearby'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This Property is in the countryside'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This Property has a pool'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'Tihs property is on an island'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a lake'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property is close to a ski resort'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is close to a castle'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activities'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is in the arctic'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property is close to a cave'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This propriety is in the desert'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in a barn'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This a luxury property'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pahtname = usePathname();

    const isMainPage = pahtname === '/';

    if (!isMainPage) {
        return null;
    }


    return (
        <Container>
            <div
                className="
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto
            "
            >
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Categories;