"use client";

import { Button, Card } from 'flowbite-react';

export default function BasicCard2() {
  return (
    <Card className="max-w-sm w-72">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Adicionado ao leilão
      </h5>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        <img src="drone.jpg" alt="iPhone Image" className="mt-4" />
      </div>
      <Button>
        <p>
          Lances!!
        </p>
      </Button>
    </Card>
  )
}