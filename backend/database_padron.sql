--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: estudiante; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.estudiante (
    num_cuenta character varying(20) NOT NULL,
    primer_apellido character varying(50),
    segundo_apellido character varying(50),
    nombres character varying(100),
    carrera character varying(100),
    grupo character varying(10),
    telefono bigint
);


ALTER TABLE public.estudiante OWNER TO postgres;

--
-- Data for Name: estudiante; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.estudiante (num_cuenta, primer_apellido, segundo_apellido, nombres, carrera, grupo, telefono) FROM stdin;
20452853	López	Zamora	Sergio	LI	2-2	6961171916
23170263	Angulo	Angulo	Mirna Vanessa	LI	2-2	6121319195
\.


--
-- Name: estudiante estudiante_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.estudiante
    ADD CONSTRAINT estudiante_pkey PRIMARY KEY (num_cuenta);


--
-- PostgreSQL database dump complete
--

