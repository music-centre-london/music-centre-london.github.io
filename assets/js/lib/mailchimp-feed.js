import React from "react";
import codogoFetch from "../network/codogo-fetch";

//Islington
$(function (){
	if ($("body.Newsletter").length > 0) {
		const postLimit = 10;
		const username = "99152c6106cf28d6dc089bcf6";
		const id = "afc8d95634";

		codogoFetch({
			url: "http://us15.campaign-archive2.com/feed?u=" + username + "&id=" + id,
			fetchParams: {
				method: "GET",
				headers: {
					'Content-Type': 'application/rss+xml'
				},
			},
		})
		.then( (x) => (x.json()) )
		.then(
			(x) => {
				const feed = $($.parseXML(x.body))
				.find("item")
				.each(function(i) {
					if( i >= postLimit ) { return false }

					const $this = $(this);

					const item = {
						title: $this.find("title").text(),
						link: $this.find("link").text(),
					}

					$("body.Newsletter .islington-mailchimp").append(
						`
							<div>
								<a href="${item.link}" target="_blank">
									<p>${item.title}</p>
								</a>

								<br>
							</div>
						`
					)
				});
			}
		)
		.then(
			() => {
				$("body.Newsletter .islington-mailchimp").append(
					`
						<div>
							<a href="http://us15.campaign-archive1.com/home/?u=${username}&id=${id}" target="_blank">
								<p>View all emails</p>
							</a>
						</div>
					`
				)
			}
		)
	}
});

//Southwark
$(function (){
	if ($("body.Newsletter").length > 0) {
		const postLimit = 10;
		const username = "99152c6106cf28d6dc089bcf6";
		const id = "232e0669d2";

		codogoFetch({
			url: "http://us15.campaign-archive2.com/feed?u=" + username + "&id=" + id,
			fetchParams: {
				method: "GET",
				headers: {
					'Content-Type': 'application/rss+xml'
				},
			},
		})
		.then( (x) => (x.json()) )
		.then(
			(x) => {
				const feed = $($.parseXML(x.body))
				.find("item")
				.each(function(i) {
					if( i >= postLimit ) { return false }

					const $this = $(this);

					const item = {
						title: $this.find("title").text(),
						link: $this.find("link").text(),
					}

					$("body.Newsletter .southwark-mailchimp").append(
						`
							<div>
								<a href="${item.link}" target="_blank">
									<p>${item.title}</p>
								</a>

								<br>
							</div>
						`
					)
				});
			}
		)
		.then(
			() => {
				$("body.Newsletter .southwark-mailchimp").append(
					`
						<div>
							<a href="http://us15.campaign-archive1.com/home/?u=${username}&id=${id}" target="_blank">
								<p>View all emails</p>
							</a>
						</div>
					`
				)
			}
		)
	}
});