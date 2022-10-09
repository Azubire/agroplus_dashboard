import React from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";
import Card from "../components/Card";
import {
  FiCompass,
  FiShoppingCart,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { GetServerSideProps } from "next";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { baseUrl } from "../app/utils/helper";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Order Per Month",
    },
  },
};

// export const barData =

interface IHome {
  data: {
    id: number;
    title: string;
    value: number | null;
    to: string;
  }[];
}

export default function Home({ data }: IHome) {
  const [barData, setBarData] = React.useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Oders",
        data: [150, 586, 454, 641, 125, 321],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  const [chartData, setChartData] = React.useState({
    labels: ["paid", "unpaid"],
    datasets: [
      {
        label: "# Payments",
        data: [1452, 1222],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const renderIcon = (id: number) => {
    let icon;
    switch (id) {
      case 1:
        icon = <FiUsers color="white" size={25} />;
        break;
      case 2:
        icon = <FiTrendingUp color="white" size={25} />;
        break;
      case 3:
        icon = <FiCompass color="white" size={25} />;
        break;
      case 4:
        icon = <FiShoppingCart color="white" size={25} />;
        break;

      default:
        <FiCompass color="white" size={25} />;
        break;
    }
    return icon;
  };
  return (
    <Box maxW="container.xl" mx="auto">
      <Head>
        <title>Welcome To Agro Plus</title>
      </Head>

      <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={2}>
        {data.map((item, index) => (
          <Card height={150} key={index}>
            <Text>{item.title}</Text>
            <Text
              fontSize="2xl"
              fontWeight="extrabold"
              bgGradient="linear(to-r,cyan.500,cyan.100)"
              bgClip="text"
            >
              {item.value}
            </Text>
            <Flex
              bgGradient="linear(to-r,cyan.500,cyan.300)"
              w={51}
              h={51}
              borderRadius="full"
              position="absolute"
              bottom={2}
              right={2}
              justifyContent="center"
              alignItems="center"
            >
              {renderIcon(item.id)}
            </Flex>
          </Card>
        ))}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={2} mt={5}>
        <Card height={300}>
          <Doughnut
            data={chartData}
            style={{ marginBottom: 10 }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "top" as const,
                },
                title: {
                  display: true,
                  text: "Orders",
                },
              },
            }}
          />
        </Card>
        <Card height={300}>
          <Bar options={options} data={barData} />
        </Card>
      </SimpleGrid>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await (await fetch(`${baseUrl}/admin/metrics`)).json();
    console.log(data);
    return {
      props: { data },
    };
  } catch (error) {
    return { props: {} };
  }
};
