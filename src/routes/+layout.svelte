<script lang="ts">
	import '../app.css';
	import { sineIn } from 'svelte/easing';
	import type { Component } from 'svelte';
	import { page } from '$app/state';
	import {
		Footer,
		removeHyphensAndCapitalize,
		DotsHorizontalOutline,
		GithubSolid,
		random_tailwind_color,
		XSolid,
		Bluesky
	} from 'runes-webkit';
	import {
		Navbar,
		NavLi,
		NavBrand,
		NavUl,
		uiHelpers,
		Darkmode,
		Dropdown,
		DropdownUl,
		DropdownLi
	} from 'svelte-5-ui-lib';
	import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
	import { Runatics } from 'runatics';
	import DynamicCodeBlockStyle from './utils/DynamicCodeBlockStyle.svelte';

	let activeUrl = $state(page.url.pathname);
	$effect(() => {
		activeUrl = page.url.pathname;
	});

	type LiType = {
		name: string;
		href: string;
		Icon?: Component;
	};
	let { children, data } = $props();
	const analyticsId = data.ANALYTICS_ID;
	// metaTags
	let metaTags = $state(
		page.data.pageMetaTags
			? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
			: data.layoutMetaTags
	);
	// sidebar
	const sidebarUi = uiHelpers();
	let isOpen = $state(false);

	let currentUrl = $state(page.url.pathname);
	const hasPath = (key: string) => currentUrl.includes(key);

	const lis: LiType[] = [
		{ name: 'Home', href: '/' },
		{ name: 'Repo', href: 'https://github.com/shinokada/svelte-carbonads' }
	];
	const brand = {
		name: 'codewithshin.com',
		href: 'https://codewithshin.com'
	};
	const urlsToIncludeSwitcherAndSidebar = ['/'];
	/*eslint no-undef: "off"*/
	const siteName = removeHyphensAndCapitalize(__NAME__);
	const githubUrl = `https://github.com/shinokada/${__NAME__}`;
	const twitterUrl = 'https://twitter.com/shinokada';
	const blueskyUrl = 'https://bsky.app/profile/codewithshin.com';

	// nav
	let nav = uiHelpers();
	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;
	let headerCls =
		'sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-sky-950';
	let navClass =
		'w-full divide-gray-200 border-gray-200 bg-gray-50 dark_bg_theme text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4';
	let divClass = 'ml-auto w-full';
	let ulclass = 'dark:lg:bg-transparent lg:space-x-4';
	function isIncluded(url: string, allowedUrls: string[]): boolean {
		return allowedUrls.some((allowedUrl) => {
			// For home page '/', do exact matching
			if (allowedUrl === '/') {
				return url === '/' || url === '';
			}
			// For other URLs, continue using startsWith
			return url.startsWith(allowedUrl);
		});
	}
	let urlsToIncludeSwitcher = ['/'];
	let include = $derived(isIncluded(currentUrl, urlsToIncludeSwitcher));
	// dropdown
	let dropdown = uiHelpers();
	let dropdownStatus = $state(false);
	let closeDropdown = dropdown.close;
	let dropdownTransitionParams = {
		y: 0,
		duration: 200,
		easing: sineIn
	};

	$effect(() => {
		navStatus = nav.isOpen;
		dropdownStatus = dropdown.isOpen;
		currentUrl = page.url.pathname;
		metaTags = page.data.pageMetaTags
			? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
			: data.layoutMetaTags;
		isOpen = sidebarUi.isOpen;
	});
</script>

{#snippet navLi(lis: LiType[])}
	{#each lis as { name, href, Icon }}
		{#if Icon}
			<Icon class="mb-3 h-8 w-8 {random_tailwind_color()}"></Icon>
		{/if}
		<NavLi {href}>{name}</NavLi>
	{/each}
{/snippet}

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />

<header class={headerCls}>
	<Navbar {navClass} {toggleNav} {closeNav} {navStatus} breakPoint="lg" fluid div2Class={divClass}>
		{#snippet brand()}
			{#if urlsToIncludeSwitcherAndSidebar.some((path) => currentUrl.startsWith(path))}
				<button
					onclick={sidebarUi.toggle}
					type="button"
					class="z-100 mt-1 mr-4 lg:hidden"
					aria-controls="navbar-default"
				>
					<span class="sr-only">Toggle sidebar menu</span>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
			{/if}
			{#if siteName}
				<NavBrand
					{siteName}
					spanClass="self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-primary-500"
				/>
			{/if}
			<div class="ml-auto flex items-center lg:order-1">
				{#if include}
					<div class="hidden sm:block">
						<DynamicCodeBlockStyle />
					</div>
				{/if}
				<DotsHorizontalOutline
					onclick={dropdown.toggle}
					class="mr-4 ml-6 dark:text-white"
					size="lg"
				/>
				<Darkmode class="m-0 p-2" />
				<div class="relative">
					<Dropdown
						{dropdownStatus}
						{closeDropdown}
						params={dropdownTransitionParams}
						class="absolute top-2 -left-[87px] w-12 p-1.5"
					>
						<DropdownUl class="py-0">
							{#if blueskyUrl}
								<DropdownLi href={blueskyUrl} target="_blank" aClass="p-0.5 m-0">
									<Bluesky size="30" />
								</DropdownLi>
							{/if}
							{#if twitterUrl}
								<DropdownLi href={twitterUrl} target="_blank" aClass="p-2 m-0"
									><XSolid /></DropdownLi
								>
							{/if}
							{#if githubUrl}
								<DropdownLi href={githubUrl} target="_blank" aClass="p-2 m-0">
									<GithubSolid />
								</DropdownLi>
							{/if}
						</DropdownUl>
					</Dropdown>
				</div>
			</div>
		{/snippet}
		{#if lis}
			<NavUl {activeUrl} class={ulclass}>
				{@render navLi(lis)}
			</NavUl>
		{/if}
	</Navbar>
</header>

<div class="lg:flex">
	{@render children()}
</div>
<Footer {brand} {lis} />
