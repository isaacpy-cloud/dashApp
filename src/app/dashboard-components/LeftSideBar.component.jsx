'use client';
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHouse, faArrowRight, faShuffle, faWaterLadder, faIdCard, faPeopleRoof, faCoins, faCarSide, faPeopleGroup   } from '@fortawesome/free-solid-svg-icons';


export default function Example() {

  const menubarData = [
    {
      id: "Operasyonlar",
      name: "Operasyon",
      link: "#",
      iconName: faHouse
    },
    {
      id: "Rezervasyonlar",
      name: "Rezervasyonlar",
      link: "#",
      iconName: faShuffle
    },
    {
      id: "Havuzda Bekleyenler",
      name: "Havuzda Bekleyenler",
      link: "#",
      iconName: faWaterLadder
    },
    {
      id: "Cari İşlemler",
      name: "Cari İşlemler",
      link: "#",
      iconName: faPeopleRoof
    },
    {
      id: "Fiyatlandırma",
      name: "Fiyatlandırma",
      link: "#",
      iconName: faCoins
    },
    {
      id: "Araç Listesi",
      name: "Araç Listesi",
      link: "#",
      iconName: faCarSide
    },
    {
      id: "Şoför Listesi",
      name: "Şoför Listesi",
      link: "#",
      iconName: faIdCard
    },
    {
      id: "Personel Yönetimi",
      name: "Personel Yönetimi",
      link: "#",
      iconName: faPeopleGroup
    },
  ]
  
  return (
    <header className="bg-white md-6 flex max-h-screen h-screen navigation-bar-header">
      <nav className='flex-initial flex-col w-72 navigation-bar'>
        <ul className='mt-10'>
          <div className="menuGroup mb-2 text-sm pl-6">
            <p>Operasyon Menüsü</p>
          </div>

          {menubarData.map(item => (
            <div key={item.id} className="nav-link-bar flex flex-row h-12 relative pl-8 w-full items-center">
              <li  className='w-full relative flex flex-row relative w-full items-center justify-start menu-control-item'>
                <FontAwesomeIcon icon={item.iconName} className='menu-icon'></FontAwesomeIcon>
                <Link href="#" className='menu-text ml-5'>{item.name}</Link>
                <FontAwesomeIcon className='menu-icon ml-auto' icon={faArrowRight} />
              </li>
            </div>
          ))}






        </ul>
      </nav>
    </header>
  )
}
